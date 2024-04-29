from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///campaigns.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Enable CORS for all routes
cors = CORS(app)

class Campaign(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    target_amount = db.Column(db.Float, nullable=False)
    raised_amount = db.Column(db.Float, default=0)
    image_url = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'description': self.description,
            'targetAmount': self.target_amount,
            'raisedAmount': self.raised_amount,
            'imageUrl': self.image_url,
            'createdAt': self.created_at.isoformat()
        }

@app.route('/api/campaigns', methods=['GET', 'POST'])
def handle_campaigns():
    if request.method == 'GET':
        campaigns = Campaign.query.all()
        return jsonify([c.to_dict() for c in campaigns])

    elif request.method == 'POST':
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No data provided'}), 400

        required_fields = ['title', 'description', 'targetAmount', 'imageUrl']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing field: {field}'}), 400

        try:
            target_amount = float(data['targetAmount'])
        except ValueError:
            return jsonify({'error': 'Invalid targetAmount, must be a number'}), 400

        campaign = Campaign(
            title=data['title'],
            description=data['description'],
            target_amount=target_amount,
            image_url=data['imageUrl']
        )
        db.session.add(campaign)
        db.session.commit()
        return jsonify(campaign.to_dict()), 201
@app.route('/api/campaigns/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def handle_campaign(id):
    campaign = Campaign.query.get(id)

    if request.method == 'GET':
        if campaign:
            return jsonify(campaign.to_dict())
        else:
            return jsonify({'error': 'Campaign not found'}), 404

    elif request.method == 'PUT':
        if campaign:
            data = request.get_json()
            campaign.title = data.get('title', campaign.title)
            campaign.description = data.get('description', campaign.description)
            campaign.target_amount = data.get('targetAmount', campaign.target_amount)
            campaign.image_url = data.get('imageUrl', campaign.image_url)
            db.session.commit()
            return jsonify(campaign.to_dict())
        else:
            return jsonify({'error': 'Campaign not found'}), 404

    elif request.method == 'DELETE':
        if campaign:
            db.session.delete(campaign)
            db.session.commit()
            return jsonify({'message': 'Campaign deleted successfully'})
        else:
            return jsonify({'error': 'Campaign not found'}), 404
if __name__ == '__main__':
    app.run(debug=True)

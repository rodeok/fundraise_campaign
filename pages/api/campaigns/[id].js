import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
const CampaignDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [campaign, setCampaign] = React.useState(null);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/campaigns/${id}`);
        setCampaign(response.data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch campaign details');
      }
    };

    if (id) {
      fetchCampaign();
    }
  }, [id]);

  if (!campaign) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={campaign.imageUrl}
          alt={campaign.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{campaign.title}</h1>
          <p className="text-gray-700 mb-4">{campaign.description}</p>
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-gray-600">
                <span className="font-bold">${campaign.raisedAmount}</span> raised of $
                {campaign.targetAmount}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{
                    width: `${(campaign.raisedAmount / campaign.targetAmount) * 100}%`,
                  }}
                />
              </div>
            </div>
            {/* Add additional details or functionality here */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CampaignDetails;
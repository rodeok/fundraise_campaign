import React from 'react';
import Campaign from './Campaign';

const CampaignList = ({ campaigns }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="p-2">
          <Campaign campaign={campaign} />
        </div>
      ))}
    </div>
  );
};

export default CampaignList;
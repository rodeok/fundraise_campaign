import React from 'react';
import axios from 'axios';
import CampaignList from '../../components/CampaignList';

const CampaignsPage = ({ campaigns }) => {
  return (
    <div>
      <h1>Active Campaigns</h1>
      <CampaignList campaigns={campaigns} />
    </div>
  );
};

export default CampaignsPage;

export async function getStaticProps() {
  const res = await axios.get(`${process.env.FLASK_API_BASE_URL}/api/campaigns`);
  const campaigns = res.data;

  return {
    props: { campaigns },
    revalidate: 600, // Regenerate the page every 10 minutes (600 seconds)
  };
}
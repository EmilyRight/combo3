const promoCampaignData = [
  { id: '1400002', discount: 50 },
  // { id: '2200001', discount: 55 },
  // { id: '800002', discount: 20 },
  // { id: '800004', discount: 30 },
];

const promoCampaignIds = [];
promoCampaignData.forEach((element) => {
  promoCampaignIds.push(element.id);
});

export { promoCampaignData, promoCampaignIds };

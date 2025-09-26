export const getSuggestedRate = (byweight, bycbm) => {

if(!byweight || !bycbm)
  return "Data not available";

const weightTotal = byweight.kg * byweight.customerRate;
const cbmTotal = bycbm.cbm * bycbm.customerRate;

return weightTotal > cbmTotal 
  ? `Suggested Rate is by Weight: ${weightTotal.toFixed(2)}` 
  : `Suggested Rate is by CBM: ${cbmTotal.toFixed(2)}`;

}
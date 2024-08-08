import { jobs } from "../utils/jobsDB";

export default function useSelectedOptions(selectedOption: string) {
  const index = jobs.indexOf(selectedOption);
  
  if (index !== -1) {
    return jobs.slice(0, index + 1);
  }
  
  return [];
}
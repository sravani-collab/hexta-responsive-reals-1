export const getProjectImageUrl = (filename: string) => {
  const baseURL = "https://cdn.hextasphere.com"
  const prefix = `projects/${filename}`;
  const encodedPrefix = encodeURIComponent(prefix);
  return `${baseURL}/${encodedPrefix}`;
};

export const getTeamImageUrl = (filename: string) => {
  const baseURL = "https://cdn.hextasphere.com"
  const prefix = `team/${filename}`;
  const encodedPrefix = encodeURIComponent(prefix);
  return `${baseURL}/${encodedPrefix}`;
};

export const getClientImageUrl = (filename: string) => {
  const baseURL = "https://cdn.hextasphere.com"
  const prefix = `clients/${filename}`;
  const encodedPrefix = encodeURIComponent(prefix);
  return `${baseURL}/${encodedPrefix}`;
};
export const getServiceImageUrl = (filename: string) => {
  const baseURL = "https://cdn.hextasphere.com"
  const prefix = `services/${filename}`;
  const encodedPrefix = encodeURIComponent(prefix);
  return `${baseURL}/${encodedPrefix}`;
};
export const getCareerImageUrl = (filename: string) => {
  const baseURL = "https://cdn.hextasphere.com"
  const prefix = `career/${filename}`;
  const encodedPrefix = encodeURIComponent(prefix);
  return `${baseURL}/${encodedPrefix}`;
};


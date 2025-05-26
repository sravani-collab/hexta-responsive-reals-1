const baseURL = "https://cdn.hextasphere.com"

export const getProjectImageUrl = (filename: string) => {
  const prefix = `projects/${filename}`;
  const encodedPrefix = encodeURIComponent(prefix);
  return `${baseURL}/${encodedPrefix}`;
};

export const getTeamImageUrl = (filename: string) => {
  const prefix = `team/${filename}`;
  const encodedPrefix = encodeURIComponent(prefix);
  return `${baseURL}/${encodedPrefix}`;
};

export const getClientImageUrl = (filename: string) => {
  const prefix = `clients/${filename}`;
  const encodedPrefix = encodeURIComponent(prefix);
  return `${baseURL}/${encodedPrefix}`;
};

export const getServiceImageUrl = (filename: string) => {
  const prefix = `services/${filename}`;
  const encodedPrefix = encodeURIComponent(prefix);
  return `${baseURL}/${encodedPrefix}`;
};

export const getCareerImageUrl = (filename: string) => {
  const prefix = `career/${filename}`;
  const encodedPrefix = encodeURIComponent(prefix);
  return `${baseURL}/${encodedPrefix}`;
};
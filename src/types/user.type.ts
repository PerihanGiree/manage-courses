export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  domain: string;
  company: {
    name: string;
    title: string;
    department: string;
  };
  image: string;
  // Diğer kullanıcı özellikleri buraya eklenebilir
};

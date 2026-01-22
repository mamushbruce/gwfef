
export type Child = {
  id: number;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  location: string;
  bio: string;
  dream: string;
  imageId: string;
  sponsorshipStatus: 'Available' | 'Sponsored';
};

export const children: Child[] = [
  {
    id: 1,
    name: 'Lina',
    age: 8,
    gender: 'Female',
    location: 'Rural Village',
    bio: 'Lina is a bright and curious girl who loves to read. She enjoys helping her mother with chores and playing with her friends. She is a top student in her class and shows great potential.',
    dream: 'a teacher',
    imageId: 'child-portrait-1',
    sponsorshipStatus: 'Available',
  },
  {
    id: 2,
    name: 'Samuel',
    age: 10,
    gender: 'Male',
    location: 'Coastal Town',
    bio: 'Samuel is an energetic boy with a passion for soccer. He is a natural leader and always encourages his teammates. He is known for his infectious smile and kind heart.',
    dream: 'a professional soccer player',
    imageId: 'child-portrait-2',
    sponsorshipStatus: 'Available',
  },
  {
    id: 3,
    name: 'Aisha',
    age: 7,
    gender: 'Female',
    location: 'Mountain Region',
    bio: 'Aisha is a creative soul who loves to draw and sing. She has a vivid imagination and can spend hours creating beautiful art. She is shy but opens up with a warm smile.',
    dream: 'an artist',
    imageId: 'child-portrait-3',
    sponsorshipStatus: 'Sponsored',
  },
  {
    id: 4,
    name: 'Daniel',
    age: 11,
    gender: 'Male',
    location: 'Urban Center',
    bio: 'Daniel is a diligent student who excels in math and science. He enjoys building things with blocks and solving puzzles. He is responsible and always willing to help others.',
    dream: 'an engineer',
    imageId: 'child-portrait-4',
    sponsorshipStatus: 'Available',
  },
  {
    id: 5,
    name: 'Maria',
    age: 9,
    gender: 'Female',
    location: 'Rural Village',
    bio: 'Maria is a nature lover and enjoys exploring the outdoors. She has a gentle spirit and is very caring towards animals. She hopes to one day help protect the environment.',
    dream: 'a veterinarian',
    imageId: 'child-portrait-5',
    sponsorshipStatus: 'Available',
  },
  {
    id: 6,
    name: 'Leo',
    age: 12,
    gender: 'Male',
    location: 'Coastal Town',
    bio: 'Leo is a confident and outgoing boy who loves to perform. He is a talented actor and enjoys being on stage. He dreams of sharing his stories with the world.',
    dream: 'an actor',
    imageId: 'child-portrait-6',
    sponsorshipStatus: 'Sponsored',
  },
];

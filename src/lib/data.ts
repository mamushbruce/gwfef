
export type Child = {
  id: number;
  name: string;
  age: number;
  gender: 'Male' | 'Female';
  location: string;
  bio: string;
  dream: string;
  imageUrl: string;
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
    imageUrl: '/sponsor/clare.jpg',
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
    imageUrl: '/sponsor/Musamba.jpg',
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
    imageUrl: '/sponsor/NAbirye.jpg',
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
    imageUrl: '/sponsor/Kasadha.jpg',
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
    imageUrl: '/sponsor/nandudu.jpg',
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
    imageUrl: '/sponsor/sengoba.jpg',
    sponsorshipStatus: 'Sponsored',
  },
];

export type Story = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageId: string;
  date: string;
};

export const stories: Story[] = [
  {
    id: 1,
    slug: 'annual-community-gala-raises-record-donations',
    title: 'Annual Community Gala Raises Record Donations',
    excerpt: 'Our annual gala was a huge success, bringing together supporters and raising funds for upcoming projects.',
    content: '<p>Our annual gala was a huge success, bringing together supporters and raising funds for upcoming projects that will further our mission of empowering children. The event, held at the Grand Ballroom, featured inspiring speeches, a silent auction, and performances from some of the children in our programs. We are incredibly grateful for the generosity of our community.</p><p>The funds raised will go towards building a new wing for our school, providing scholarships for promising students, and expanding our healthcare services. Thanks to our donors, we can continue to make a meaningful impact on the lives of countless children and their families.</p>',
    imageId: 'news-1',
    date: 'October 20, 2023',
  },
  {
    id: 2,
    slug: 'new-literacy-program-launched-in-5-villages',
    title: 'New Literacy Program Launched in 5 Villages',
    excerpt: 'We\'re excited to launch a new program focused on improving reading and writing skills for over 200 children.',
    content: '<p>We are thrilled to announce the launch of our new literacy program, which will serve over 200 children across five villages. This initiative aims to provide essential reading and writing skills, opening up new worlds of opportunity for these young learners.</p><p>The program includes mobile libraries, trained tutors, and interactive workshops to make learning fun and engaging. We believe that literacy is the foundation for a brighter future, and we are committed to giving every child the tools they need to succeed.</p>',
    imageId: 'news-2',
    date: 'September 15, 2023',
  },
  {
    id: 3,
    slug: 'volunteers-complete-construction-of-a-new-library',
    title: 'Volunteers Complete Construction of a New Library',
    excerpt: 'A dedicated team of volunteers has completed a new library, providing access to thousands of books.',
    content: '<p>Thanks to the hard work and dedication of our amazing volunteers, a new community library has been constructed. This beautiful new space will provide access to thousands of books for children and adults alike, fostering a love for reading and learning in the community.</p><p>The library will also host story time sessions for young children, study groups for students, and workshops for adults. It is more than just a building; it is a hub for knowledge, creativity, and community connection.</p>',
    imageId: 'news-3',
    date: 'August 1, 2023',
  },
];

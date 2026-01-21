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

export type Story = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageId: string;
  date: string;
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

export const stories: Story[] = [
  {
    id: 1,
    slug: 'community-builds-a-new-school',
    title: 'A Community Builds a New School',
    excerpt: 'Through collective effort and generous donations, the village of Mwangaza now has a new school, bringing education closer to hundreds of children.',
    content: '<p>The journey began with a simple dream: a safe and permanent place for the children of Mwangaza to learn. For years, classes were held under a large baobab tree, vulnerable to the whims of weather. Thanks to the "Build a School" initiative, supporters from around the world joined hands with local community members. </p><p>Volunteers and workers toiled for months, and the result is a beautiful four-classroom school building, complete with a small library and playground. Today, the sound of children learning fills the halls, a testament to what can be achieved when a community comes together for a common cause.</p>',
    imageId: 'story-community-build',
    date: '2023-10-15',
  },
  {
    id: 2,
    slug: 'esthers-journey-to-graduation',
    title: "Esther's Journey to Graduation",
    excerpt: "From a small village to a university graduate, Esther's story is one of perseverance, hope, and the impact of sponsorship.",
    content: "<p>When Esther was sponsored at age 10, her dream of becoming a nurse seemed distant. With the support of her sponsor, she was able to stay in school, receive the necessary supplies, and focus on her studies. </p><p>Her hard work paid off when she earned a scholarship to a national university. Last month, Esther graduated with a degree in nursing. She is now back in her community, providing much-needed medical care and inspiring the next generation to dream big.</p>",
    imageId: 'story-graduation-day',
    date: '2023-09-20',
  },
  {
    id: 3,
    slug: 'clean-water-transforms-a-village',
    title: 'Clean Water Transforms a Village',
    excerpt: "The installation of a new well has brought not just clean water, but also health, and new opportunities to the village of Upendo.",
    content: "<p>For the people of Upendo, access to clean water was a daily struggle. Women and children would walk miles each day to fetch water from a contaminated source, leading to widespread illness. </p><p>Through our 'Water for Life' project, a deep borehole well was drilled in the center of the village. The impact was immediate. Waterborne diseases have drastically reduced, children have more time to attend school, and women are able to engage in income-generating activities. The well has become the heart of the village, a source of life and hope.</p>",
    imageId: 'story-clean-water',
    date: '2023-08-05',
  },
];

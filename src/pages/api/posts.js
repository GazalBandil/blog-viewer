export default function handler(req, res) {
  const posts = [
    { id: 1, 
      title: "First five things to do in morning", 
      content: "Knlowdge of the 5 things that we should do in morning." 
    },
    {
      id: 2,
      title: "Best of memories",
      content: "Now er are going to know the best past meories me have",
    },
    {
      id: 3,
      title: "Getting things to done",
      content: "In this we are going to see how to get things done in less time",
    }
  ];
  res.status(200).json(posts);
}

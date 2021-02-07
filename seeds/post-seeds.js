const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    text_field: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Deleniti commodi ipsa?',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    text_field: 'Dignissimos sunt eveniet facilis asperiores necessitatibus recusandae animi! Incidunt',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    text_field: 'Pariatur tenetur porro nesciunt rem vitae quisquam earum iusto similique',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    text_field: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    text_field: 'Consectetur dicta quibusdam neque voluptatum. Non tempora alias aliquid',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    text_field: 'Iure doloribus illo voluptatem ratione officia doloremque aliquam consectetur quidem molestiae nam dolorem.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    text_field: 'Delectus animi soluta, aperiam excepturi',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    text_field: 'Quibusdam corrupti dolores officiis',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    text_field: 'Beatae cum soluta obcaecati exercitationem. Id minima veniam vel. Vitae velit earum libero',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    text_field: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    text_field: 'Inventore amet eos qui ullam ipsam fuga? A, incidunt!',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    text_field: 'Id tenetur delectus cumque accusantium earum eaque nemo',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    text_field: 'Corporis quasi deleniti dolores repellendus',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    text_field: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    text_field: 'Cumque non dolore at ratione? Tenetur, corrupti esse corporis delectus reiciendis ullam nesciunt!',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    text_field: 'Deserunt porro impedit ducimus dicta molestias omnis quas distinctio?',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    text_field: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    text_field: 'Dicta excepturi ex ratione cum consequatur alias hic a? Unde!',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    text_field: 'Ad fuga repellendus, sequi iusto quis saepe provident recusandae expedita quasi commodi',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    text_field: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;

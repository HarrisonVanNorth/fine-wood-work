
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/kitchen.jpg', category: 'kitchen', key: 'kitchen.jpg'},
        {img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/kitchen_01.jpg', category: 'kitchen', key: 'kitchen_01.jpg'},
        {img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/kitchen_02.jpg', category: 'kitchen', key: 'kitchen_02.jpg'},
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/kitchen_04.jpg', category: 'kitchen', key: 'kitchen_04.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/kitchen_05.jpg', category: 'kitchen', key: 'kitchen_05.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/kitchen_06.jpg', category: 'kitchen', key: 'kitchen_06.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/kitchen_07.jpg', category: 'kitchen', key: 'kitchen_07.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/kitchen_08.jpg', category: 'kitchen', key: 'kitchen_08.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/kitchen_09.jpg', category: 'kitchen', key: 'kitchen_09.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/kitchen_10.jpg', category: 'kitchen', key: 'kitchen_10.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/bath_01.jpg', category: 'bath', key: 'bath_01.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/bath_02.jpg', category: 'bath', key: 'bath_02.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/bath_03.jpg', category: 'bath', key: 'bath_03.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/bath_04.jpg', category: 'bath', key: 'bath_04.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/bath_05.jpg', category: 'bath', key: 'bath_05.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/bath_06.jpg', category: 'bath', key: 'bath_06.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/bath_07.jpg', category: 'bath', key: 'bath_07.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/bath_08.jpg', category: 'bath', key: 'bath_08.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/bath_09.jpg', category: 'bath', key: 'bath_09.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/bath_10.jpg', category: 'bath', key: 'bath_10.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/closet_01.jpg', category: 'closet', key: 'closet_01.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/closet_02.jpg', category: 'closet', key: 'closet_02.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/closet_03.jpg', category: 'closet', key: 'closet_03.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/closet_04.jpg', category: 'closet', key: 'closet_04.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/closet_05.jpg', category: 'closet', key: 'closet_05.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/closet_06.jpg', category: 'closet', key: 'closet_06.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/closet_07.jpg', category: 'closet', key: 'closet_07.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/closet_08.jpg', category: 'closet', key: 'closet_08.jpg' },
        { img_url: 'https://s3-us-west-1.amazonaws.com/fine-wood-work-182749/closet_09.jpg', category: 'closet', key: 'closet_09.jpg' },
      ]);
    });
};

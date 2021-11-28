const { Posts } = require('../../models');

const postData = [
    {
        content: 'Phasellus sit amet augue bibendum, ultrices quam a, condimentum libero. Donec luctus, nisi sed luctus scelerisque, nisl diam porttitor est, sed gravida nisl sem nec purus.',
        user_id: 1,
        story_id: 1,
    },
    {
        content: 'Maecenas mauris augue, convallis ut orci eget, ornare sollicitudin tortor. Fusce accumsan molestie magna id gravida.',
        user_id: 1,
        story_id: 3,
    },
    {
        content: 'Maecenas quam ipsum, placerat sit amet bibendum ac, vulputate vel massa. Cras faucibus mi at enim faucibus rutrum.',
        user_id: 2,
        story_id: 2,
    },
    {
        content: 'Cras quis imperdiet lectus, at feugiat lacus. Maecenas efficitur dapibus magna eu sagittis. Vivamus sit amet odio viverra, tincidunt justo nec, scelerisque orci.',
        user_id: 3,
        story_id: 4,
    },
    {
        content: 'Maecenas facilisis libero eu pulvinar pharetra. Curabitur efficitur, sem vitae tincidunt scelerisque, arcu purus convallis dolor, a lobortis risus mi eu lorem.',
        user_id: 3,
        story_id: 5,
    },
    {
        content: 'Fusce ex arcu, dictum et efficitur convallis, venenatis at nisl. Aenean aliquam vestibulum nibh, sit amet sollicitudin enim egestas nec.',
        user_id: 2,
        story_id: 4,
    },
    {
        content: 'Praesent vel ex non leo rhoncus bibendum. In tincidunt metus commodo nulla elementum ultricies. Duis malesuada felis leo, iaculis aliquam lacus vestibulum ut.',
        user_id: 1,
        story_id: 2,
    },
    {
        content: 'Nam pulvinar tellus mauris. Phasellus tempus metus ac varius rutrum. Curabitur cursus turpis ipsum, a rhoncus sapien pretium eu.',
        user_id: 1,
        story_id: 1,
    },
    {
        content: 'Donec vitae risus in tellus interdum convallis et sed felis. Duis vel ultrices justo. Mauris cursus metus nisl, ut ullamcorper est consequat ut.',
        user_id: 3,
        story_id: 2,
    },
    {
        content: 'Donec urna velit, ultricies ut lorem eu, bibendum fringilla mauris. Curabitur vitae mi vitae magna tristique sodales.',
        user_id: 3,
        story_id: 5,
    },
    {
        content: 'Suspendisse eget ultricies dui. In eleifend orci justo, ut luctus magna egestas nec.',
        user_id: 2,
        story_id: 4,
    },
    {
        content: 'Vivamus aliquet velit ac ullamcorper convallis. Sed egestas nibh vel aliquam sodales.',
        user_id: 1,
        story_id: 3,
    },
    {
        content: 'Nulla facilisi.',
        user_id: 2,
        story_id: 3,
    },
    {
        content: 'Sed urna felis, cursus ac tortor eu, convallis imperdiet nulla. In facilisis lacus eget sapien ullamcorper, at ullamcorper felis ultrices.',
        user_id: 3,
        story_id: 2,
    },
    {
        content: 'Mauris vel tortor egestas, euismod sem nec, tincidunt ligula. Suspendisse consectetur viverra viverra.',
        user_id: 3,
        story_id: 1,
    },
];

const seedPosts = () => Posts.bulkCreate(postData);

module.exports = seedPosts;
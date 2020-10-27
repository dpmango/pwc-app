const testsData = [
  {
    id: 12,
    title: 'Привет',
    questions_order: 'random',
    test_pictures: [
      {
        id: 8,
        test_id: 15,
        picture_path:
          'https://ft-pwc-backend.dline-rhost.ru/storage/tests/15/pictures/tejb8gXLsmOrKoMjYVZIU25cPjocTzR4YKpTRVXk.jpeg',
        order: 1,
      },
    ],
    reply_options: null,
    test_completed: false,
  },
  {
    id: 15,
    title: 'Амальгам',
    questions_order: 'random',
    reply_options:
      '["Твой результат 0 из 5. Похоже, тебе стоит потренироваться!", "Твой результат 1 из 5. Тебе есть, к чему стремиться!"]',
  },
  {
    id: 16,
    title: 'Новый тест',
    questions_order: 'random',
    reply_options: null,
  },
  {
    id: 18,
    title: 'Тест (порядок 1)',
    questions_order: 'prioritized',
    reply_options: null,
  },
]

const test15 = {
  id: 15,
  title: 'Амальгам',
  questions_order: 'random',
  questions_ids: '[6]',
  session_key: 'fbgqokc0iieyuyw1n01y3qvaj',
}

const questionId6 = {
  question: '<p>test</p>',
  questions_pictures: [
    {
      id: 6,
      test_id: 15,
      question_id: 6,
      type: 'question',
      answer_number: null,
      picture_path:
        'https://ft-pwc-backend.dline-rhost.ru/storage/questions/6/pictures/yqSlbzuMBs3Q4jDMPHVvonnh239RK3AmEiwOuOpw.jpeg',
      order: 0,
    },
  ],
  answers_pictures: [],
  answer_type: 'select',
  answer_options: ['a', '3', '2'],
}

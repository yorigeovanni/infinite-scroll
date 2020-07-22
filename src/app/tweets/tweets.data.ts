import faker from 'faker';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const count = 30;
const data = [];

for (let i = 0; i < count; i++) {
  data.push({
    id: faker.random.number(),
    username: faker.name.findName(),
    text: faker.lorem.sentence()
  });
}

export function getData(params = { page: 1 }) {
  const perPage = 10;
  const offset = (params.page - 1) * perPage;
  const paginatedItems = data.slice(offset, offset + perPage);
  const hasMore = offset + perPage !== data.length;

  return {
    currentPage: params.page,
    hasMore,
    perPage: perPage,
    total: data.length,
    lastPage: Math.ceil(data.length / perPage),
    data: paginatedItems
  };
}

export const getTweets = function(params?) {
  return timer(1000).pipe(mapTo(getData(params)));
};

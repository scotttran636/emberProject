import DS from 'ember-data';

export default DS.Model.extend({
  movie_name: DS.attr('string'),
  movie_image: DS.attr('string'),
  release_date: DS.attr('string'),
  description: DS.attr('string'),
  in_stock: DS.attr('number'),
  price: DS.attr('number')
});

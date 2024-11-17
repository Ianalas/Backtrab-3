import { createClient } from '@supabase/supabase-js';

const supabase = 
  createClient(
    'https://ctuhfemmikhklwqontnr.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dWhmZW1taWtoa2x3cW9udG5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3MDg2NTksImV4cCI6MjA0NzI4NDY1OX0.ta7lYF61nqO4Aku7GDD7bKyw0bk0l8HQJcMMKG9Klrk'
  )
export class ProductsController {

  async index(request, response) {
    const {data, error} = await supabase
    .from('products')
    .select()

    response.json({ response: data });
  }

  async show (request, response){
    const { id } = request.params;

    const {data, error} = await supabase
      .from('products')
      .select()
      .eq('id', id)
    response.json({ response: data });
  }

  async create(request, response){
    const { name, description, price } = request.body;

    const { error } = await supabase
    .from('products')
    .insert({
      name: name,
      description: description,
      price: price,
      created_at: new Date()
    })
    if (error) {
      response.json({error: error});
    }

    response.json({ response: "created" });
  }

  async update(request, response){
    const {id} = request.params;
    const { name, description, price } = request.body;

    const {error} = await supabase
      .from('products')
      .update({
        name: name,
        description: description,
        price: price
      })
      .eq('id', id)

    if (error) {
      response.json({error: error});
    }

    response.json({ response: "updated!!"});
  }

  async remove(request, response){
    const {id} = request.params;

    const {error} = await supabase
      .from('products')
      .delete()
      .eq('id', id)

    if (error) {
      response.json({error: error});
    }

    response.json({ response: "deleted!!"});
  }
}
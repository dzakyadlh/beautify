import { supabase } from '../config/supabase';

export const fetchData = async () => {
  const { data, error } = await supabase.from('your_table_name').select('*');
  if (error) {
    console.error('Error fetching data:', error.message);
  } else {
    console.log('Data fetched:', data);
  }
};

export const insertData = async (newRecord) => {
  const { data, error } = await supabase
    .from('your_table_name')
    .insert(newRecord);
  if (error) {
    console.error('Error inserting data:', error.message);
  } else {
    console.log('Data inserted:', data);
  }
};

export const updateData = async (id, updatedRecord) => {
  const { data, error } = await supabase
    .from('your_table_name')
    .update(updatedRecord)
    .eq('id', id);
  if (error) {
    console.error('Error updating data:', error.message);
  } else {
    console.log('Data updated:', data);
  }
};

export const deleteData = async (id) => {
  const { data, error } = await supabase
    .from('your_table_name')
    .delete()
    .eq('id', id);
  if (error) {
    console.error('Error deleting data:', error.message);
  } else {
    console.log('Data deleted:', data);
  }
};

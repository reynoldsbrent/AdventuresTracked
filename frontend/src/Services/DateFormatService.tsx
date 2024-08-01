import React from 'react'
import { format } from 'date-fns'

export const DateFormatService = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, 'MM/dd/yyyy');
};


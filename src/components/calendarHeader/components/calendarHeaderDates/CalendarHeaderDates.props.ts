/*
 * @LastEditors: Necfol
 * @Date: 2023-02-01 20:47:19
 * @LastEditTime: 2023-02-01 20:55:19
 * @FilePath: /kalend/src/components/calendarHeader/components/calendarHeaderDates/CalendarHeaderDates.props.ts
 */
import { DateTime } from 'luxon';

export interface CalendarHeaderDatesProps {
  daysNum: number;
  calendarDays: DateTime[];
  setViewChanged?: any;
}

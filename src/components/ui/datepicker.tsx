import { Calendar } from "lucide-react";
import { default as CalenderDatePicker } from 'react-date-picker';
import { useState } from 'react';

export const DatePicker = () => {
    return (
        <div>
            <CalenderDatePicker
                monthPlaceholder={"MM"}
                dayPlaceholder={"DD"}
                yearPlaceholder={"YYYY"}
                calendarIcon={<Calendar height={16} width={16} />}
                // clearIcon={null}
                format='MM-dd-y'
            />

        </div>
    )
}

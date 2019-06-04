import {Pipe, PipeTransform } from '@angular/core';

@Pipe(
    {
        name: "summary"
    }
)


export class summaryPipe implements PipeTransform
{
    transform(value: any, maxLength?: number)
    {
        return (value as string).substr(0, 2) + "..";
    }
}
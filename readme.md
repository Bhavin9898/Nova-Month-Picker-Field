# Laravel Nova Month Picker Field Type

This is a simple nova field type to introduce a month picker with the ability to select the month and year.

## Form View

![index view](https://i.imgur.com/KiF8Poi.png)

## Installation

`composer require bhavin-thummar/month-picker`

## Usage

```php

use BhavinThummar\MonthPicker\MonthPicker;

public function fields(Request $request)
{
    return [

        //for index page
        MonthPicker::make('Month & Year', 'month_year', function () {
            if ($this->month_year) {
                return array('month' => date('m', strtotime(($this->month_year))), 'year' => date('Y', strtotime(($this->month_year))));
            }
        })
        ->onlyOnForms(),

        //for detail and view page
        MonthPicker::make('Month & Year', 'month_year', function () {
            return date('M-Y', strtotime($this->month_year));
        })->sortable()->exceptOnForms(),
    ];
}

```

## License

Go crazy, do what you like :)


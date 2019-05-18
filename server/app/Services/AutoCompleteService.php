<?php
namespace App\Services;

use Illuminate\Support\Facades\Config;

class AutoCompleteService
{
    private $names;
    private $serchText;
    public function __construct() {
         $this->names = Config::get('names.$autocomplete');
    }
    private function checkArrayElements($el) {
        return(stripos($el, $this->serchText) === 0);
    }
    public function getCalculatedNames($searchText) {
        $this->serchText = $searchText;
        return array_filter($this->names, array($this, 'checkArrayElements'));
    }

}

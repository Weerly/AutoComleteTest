<?php

namespace App\Http\Controllers;

use App\Services\AutoCompleteService;

class DataController extends Controller
{
    function calculateMatchData($searchText, AutoCompleteService $autoCompleteService) {
        return json_encode($autoCompleteService->getCalculatedNames($searchText));
    }
}

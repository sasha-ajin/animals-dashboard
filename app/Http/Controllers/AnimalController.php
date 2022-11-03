<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AnimalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Animal::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required',
            'image' => 'required',
            'color' => 'required',
            'number' => 'required|integer|min:1|max:9|unique:animals'

        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'error' => $validator->errors()
            ]);
        }
        $animal = Animal::create($input);
        return response()->json([
            'success' => true,
            'message' => 'Animal is added',
            'animal' => $animal
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (Animal::where('id', $id)->exists()) {
            $validator = Validator::make($request->all(), [
                'name' => 'required',
                'image' => 'required',
                'color' => 'required',
                'number' => 'required|integer|min:1|max:9|unique:animals'

            ]);
            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'error' => $validator->errors()
                ]);
            }
            $animal = Animal::find($id);
            $animal->number = $request->number;
            $animal->color = $request->color;
            $animal->name = $request->name;
            $animal->image = $request->image;
            return response()->json([
                'success' => true,
                'message' => 'Animal updated successfully',
                'animal' => $animal
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Animal was not found',
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Animal::where('id', $id)->exists()) {
            $animal = Animal::find($id);
            $animal->delete();
            return response()->json([
                'success' => true,
                'message' => 'Animal deleted successfully',
            ]);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Animal was not found',
            ]);
        }
    }
}

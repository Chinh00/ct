<?php

namespace App\Http\Controllers;

use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class ControllerApiTest extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    
    public function index(Request $request)
    {   
        
        $in = DB::table("user")->insert([
            "email" => $request->email,
            "password" => $request->password,
        ]);
        if ($in > 0){
            return response()->json("TRUE");
        }
        return response()->json("FALSE");
    }

    public function data(Request $request){
        $data = DB::table("income")->join("user", "user.id", "=", "income.user_id")->join("categories", "categories.id", "=", "income.category_id")->where("user.email", $request->email)->get();
        return response()->json($data);
    }
    public function add(Request $request){
        DB::table("test1")->insert([
            "name" => $request->cate
        ]);
        $inp = DB::table("income")->insert([
            "total" => $request->total,
            "comment" => $request->comment,
            "category_id" => $request->id,
            "created_at" => $request->date,
            
        ]);
        if ($inp > 0) {
            return response()->json("TRUE");
        }
        return response()->json("FALSE");
    }
    public function get($id){
        $data = DB::table("user")->where("id", $id)->get();
        return response()->json($data);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $data = DB::table("user")->where("email", $request->email)->where("password", $request->password)->get();
        
        if ($data->count() > 0){
            return response()->json("TRUE");
        }
        return response()->json("FALSE");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}

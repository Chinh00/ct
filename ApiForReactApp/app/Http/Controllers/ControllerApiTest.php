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
    public function deleteOut(Request $request) {
        DB::table("spending")->where("id", $request->id)->delete();
        return response()->json("TRUE");

    }
    public function getListUser(){
        $data = DB::table("user")->get();
        return response()->json($data);
    }
    public function index(Request $request)
    {   
        
        $in = DB::table("user")->insert([
            "email" => $request->email,
            "password" => $request->password,
            "subtotal" => $request->subtotal
        ]);
        if ($in > 0){
            return response()->json((DB::table("user")->select("id")->where("email", $request->email)->get()[0]->id));
        }
        return response()->json("FALSE");
    }
    public function dataOut(Request $request){
        $data = DB::table("spending")->select("spending.id", "spending.total", "spending.comment" ,  "categories.name", "spending.created_at")->join("categories", "categories.id", "=", "spending.category_id")->where("spending.user_id", $request->id)->orderBy("spending.created_at", "DESC")->get();
            return response()->json($data);
    }
    public function data(Request $request){
        $data = DB::table("income")->select("income.id", "income.total", "income.comment" ,  "categories.name", "income.created_at")->join("categories", "categories.id", "=", "income.category_id")->where("income.user_id", $request->id)->orderBy("income.created_at", "DESC")->get();
        return response()->json($data);
    }
    public function item(Request $request) {
        $item = DB::table("income")->where("id", $request->id)->get();
        return response()->json($item);
    }

    public function addOut(Request $request) {
        $inp = DB::table("spending")->insert([
            "total" => $request->total,
            "comment" => $request->comment,
            "category_id" => $request->cate,
            "created_at" => $request->time,
            "user_id" => $request->id
            
            
        ]);
        DB::table("user")->where("id", $request->id)->update([
            "subtotal" => (DB::table("user")->select("subtotal")->where("id", $request->id)->get()[0]->subtotal - $request->total)
        ]);
        if ((DB::table("user")->select("subtotal")->where("id", $request->id)->get()[0]->subtotal) <= $request->total){
            return response()->json("WARNING");
        }
        
        
        return response()->json("TRUE");
    }
    public function add(Request $request){
        
        $inp = DB::table("income")->insert([
            "total" => $request->total,
            "comment" => $request->comment,
            "category_id" => $request->cate,
            "created_at" => $request->time,
            "user_id" => $request->id
            
            
        ]);
        // if ($inp > 0) {
        //     return response()->json("TRUE");
        // }
        DB::table("user")->where("id", $request->id)->update([
            "subtotal" => (DB::table("user")->select("subtotal")->where("id", $request->id)->get()[0]->subtotal + $request->total)
        ]);
        return response()->json("TRUE");
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
            if ($request->email == "a@gmail.com") {
                return response()->json("ADMIN");
            }
            return response()->json((DB::table("user")->select("id")->where("email", $request->email)->get()[0]->id));
        }
        return response()->json("FALSE");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        DB::table("income")->where("id", $request->id)->delete();
        return response()->json("TRUE");
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

<?php

namespace App\Http\Controllers;

use App\Http\Requests\userDealRequest;
use App\Models\product;
use App\Models\user_deal;
use Illuminate\Http\Request;

class UserDealController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(userDealRequest $request)
    {
        $for_later = 0;
        if ($request->for_later != null && $request->for_later != 0) {
            $for_later = $request->for_later;
        }
        $add_toCard = user_deal::create([
            'user_id' => \Auth::id(),
            'product_id' => $request->product_id,
            'deal' => $request->deal,
            'for_later' => $for_later
        ]);
        return response()->json($add_toCard, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show_cart()
    {
        $deals = user_deal::cart();
        foreach ($deals as $deal) {
            $deal['product_id'] = product::product($deal->product_id);
        }
        return response()->json($deals, 200);
    }

    public function show_orders()
    {
        $orders = user_deal::orders();
        foreach ($orders as $order) {
            $order['product_id'] = product::product($order->product_id);
        }
        return response()->json($orders, 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($deal_id)
    {
        $user_deal = user_deal::find($deal_id)->first();

        if (\Auth::id() != $user_deal->user_id && $user_deal->deal == 1) {
            return response()->json('You do not have promotion', 400);
        } else {

            $user_deal->deal = 1;
            $user_deal->save();
            return response()->json($user_deal);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, user_deal $user_deal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(user_deal $user_deal)
    {
        //
    }
}

<?php

function is_admin()
{
    if (\Auth::user()->level >= 2) {
        return true;
    } else {
        return false;
    }
}

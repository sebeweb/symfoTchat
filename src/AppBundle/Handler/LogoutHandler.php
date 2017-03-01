<?php
namespace AppBundle\Handler;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Http\Logout\LogoutSuccessHandlerInterface;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of AuthenticationHandler
 *
 * 
 */
class LogoutHandler implements LogoutSuccessHandlerInterface{
    

    public function onLogoutSuccess(Request $request) {
//        redirige vers url passer en parametre
        return new RedirectResponse("/disconnect/".$request->getSession()->get("usr"));
    }


}

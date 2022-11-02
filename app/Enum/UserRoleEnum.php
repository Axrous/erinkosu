<?php

namespace App\Enum;

enum UserRoleEnum: string
{
    case ADMIN = 'admin';
    case OWNER = 'owner';
    case CUSTOMER = 'customer';
}

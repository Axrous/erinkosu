<?php

namespace App\Enum;

enum TransactionStatusEnum: string
{
  case PENDING = 'pending';
  case CANCEL = 'cancel';
  case SUCCESS = 'success';
  case DONE = "done";
}

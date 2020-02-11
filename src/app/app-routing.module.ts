import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BbmComponent } from './bbm/bbm.component';
import { BrandComponent } from './brand/brand.component';
import { TransferComponent } from './transfer/transfer.component';
import { BuyPaymentComponent } from './buy-payment/buy-payment.component';
import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer/customer.component';
import { DebtComponent } from './debt/debt.component';
import { FactoryComponent } from './factory/factory.component';
import { ModuleComponent } from './module/module.component';
import { ProductComponent } from './product/product.component';
import { ReceivableComponent } from './receivable/receivable.component';
import { SpbComponent } from './spb/spb.component';
import { StaffComponent } from './staff/staff.component';
import { SupplierComponent } from './supplier/supplier.component';
import { StockOpnameComponent } from './stock-opname/stock-opname.component';
import { StockProductComponent } from './stock-product/stock-product.component';
import { TempDetailSoComponent } from './temp-detail-so/temp-detail-so.component';
import { TempDetailSpbComponent } from './temp-detail-spb/temp-detail-spb.component';
import { TempDetailTransferComponent } from './temp-detail-transfer/temp-detail-transfer.component';
import { DeliveryOrderComponent } from './delivery-order/delivery-order.component';
import { DetailBbmComponent } from './detail-bbm/detail-bbm.component';
import { DetailReturStaffComponent } from './detail-retur-staff/detail-retur-staff.component';
import { DetailReturSupplierComponent } from './detail-retur-supplier/detail-retur-supplier.component';
import { DetailSoComponent } from './detail-so/detail-so.component';
import { DetailSpbComponent } from './detail-spb/detail-spb.component';
import { DetailTransferComponent } from './detail-transfer/detail-transfer.component';
import { ReturStaffComponent } from './retur-staff/retur-staff.component';
import { ReturSupplierComponent } from './retur-supplier/retur-supplier.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { SalesPaymentComponent } from './sales-payment/sales-payment.component';
import { SalesTransactionComponent } from './sales-transaction/sales-transaction.component';
import { DetailDoComponent } from './detail-do/detail-do.component';
import { BuyTransactionComponent } from './buy-transaction/buy-transaction.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'bbm', component: BbmComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'buy-payment', component: BuyPaymentComponent },
  { path: 'buy-transaction', component: BuyTransactionComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'debt', component: DebtComponent },
  { path: 'delivery-order', component: DeliveryOrderComponent },
  { path: 'detail-bbm', component: DetailBbmComponent },
  { path: 'detail-do', component: DetailDoComponent },
  { path: 'detail-retur-staff', component: DetailReturStaffComponent },
  { path: 'detail-retur-supplier', component: DetailReturSupplierComponent },
  { path: 'detail-so', component: DetailSoComponent },
  { path: 'detail-spb', component: DetailSpbComponent },
  { path: 'detail-transfer', component: DetailTransferComponent },
  { path: 'factory', component: FactoryComponent },
  { path: 'module', component: ModuleComponent },
  { path: 'product', component: ProductComponent },
  { path: 'receivable', component: ReceivableComponent },
  { path: 'retur-staff', component: ReturStaffComponent },
  { path: 'retur-supplier', component: ReturSupplierComponent },
  { path: 'sales-order', component: SalesOrderComponent },
  { path: 'sales-payment', component: SalesPaymentComponent },
  { path: 'sales-transaction', component: SalesTransactionComponent },
  { path: 'spb', component: SpbComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'stock-opname', component: StockOpnameComponent },
  { path: 'stock-product', component: StockProductComponent },
  { path: 'supplier', component: SupplierComponent },
  { path: 'temp-detail-so', component: TempDetailSoComponent },
  { path: 'temp-detail-spb', component: TempDetailSpbComponent },
  { path: 'temp-detail-transfer', component: TempDetailTransferComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

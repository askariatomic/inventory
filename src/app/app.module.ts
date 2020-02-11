import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { BbmComponent } from './bbm/bbm.component';
import { BrandComponent } from './brand/brand.component';
import { BuyPaymentComponent } from './buy-payment/buy-payment.component';
import { BuyTransactionComponent } from './buy-transaction/buy-transaction.component';
import { CategoryComponent } from './category/category.component';
import { CustomerComponent } from './customer/customer.component';
import { DebtComponent } from './debt/debt.component';
import { DeliveryOrderComponent } from './delivery-order/delivery-order.component';
import { DetailBbmComponent } from './detail-bbm/detail-bbm.component';
import { DetailReturStaffComponent } from './detail-retur-staff/detail-retur-staff.component';
import { DetailReturSupplierComponent } from './detail-retur-supplier/detail-retur-supplier.component';
import { DetailSoComponent } from './detail-so/detail-so.component';
import { DetailSpbComponent } from './detail-spb/detail-spb.component';
import { DetailTransferComponent } from './detail-transfer/detail-transfer.component';
import { FactoryComponent } from './factory/factory.component';
import { ModuleComponent } from './module/module.component';
import { ProductComponent } from './product/product.component';
import { ReceivableComponent } from './receivable/receivable.component';
import { ReturStaffComponent } from './retur-staff/retur-staff.component';
import { ReturSupplierComponent } from './retur-supplier/retur-supplier.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { SalesPaymentComponent } from './sales-payment/sales-payment.component';
import { SalesTransactionComponent } from './sales-transaction/sales-transaction.component';
import { SpbComponent } from './spb/spb.component';
import { StaffComponent } from './staff/staff.component';
import { StockOpnameComponent } from './stock-opname/stock-opname.component';
import { StockProductComponent } from './stock-product/stock-product.component';
import { SupplierComponent } from './supplier/supplier.component';
import { TempDetailSoComponent } from './temp-detail-so/temp-detail-so.component';
import { TempDetailSpbComponent } from './temp-detail-spb/temp-detail-spb.component';
import { TempDetailTransferComponent } from './temp-detail-transfer/temp-detail-transfer.component';
import { TransferComponent } from './transfer/transfer.component';
import { DetailDoComponent } from './detail-do/detail-do.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    FooterComponent,
    BbmComponent,
    BrandComponent,
    BuyPaymentComponent,
    BuyTransactionComponent,
    CategoryComponent,
    CustomerComponent,
    DebtComponent,
    DeliveryOrderComponent,
    DetailBbmComponent,
    DetailReturStaffComponent,
    DetailReturSupplierComponent,
    DetailSoComponent,
    DetailSpbComponent,
    DetailTransferComponent,
    FactoryComponent,
    ModuleComponent,
    ProductComponent,
    ReceivableComponent,
    ReturStaffComponent,
    ReturSupplierComponent,
    SalesOrderComponent,
    SalesPaymentComponent,
    SalesTransactionComponent,
    SpbComponent,
    StaffComponent,
    StockOpnameComponent,
    StockProductComponent,
    SupplierComponent,
    TempDetailSoComponent,
    TempDetailSpbComponent,
    TempDetailTransferComponent,
    TransferComponent,
    DetailDoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

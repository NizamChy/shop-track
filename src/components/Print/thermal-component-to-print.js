import * as React from 'react';

import numberToWords from 'number-to-words';
export class ThermalComponentToPrint extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { checked: false };
  }

  render() {
    const { text, invoiceData } = this.props;
    function formatDate(date) {
      const options = { day: '2-digit', month: 'short', year: 'numeric' };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    function amountToText(amount) {
      const words = numberToWords.toWords(amount);
      return `${words} Taka`;
    }
    return (
      <div className="relativeCSS thermal-printer">
        <style type="text/css" media="print">
          {`
            @page { size: portrait;
              margin-bottom: 10mm;
              margin-top:10mm;
            }
          `}
        </style>
        <div className="flash" />
        <table className="testClass w-[100%] max-w-[92%] text-center  mt-5">
          <thead>
            <tr>
              <th className="text-sm pt-4 " colSpan={7}>
                {invoiceData?.merchantInfo?.shop_name}
              </th>
            </tr>
            <tr>
              <th className="text-sm text-gray-800" colSpan={7}>
                {invoiceData?.merchantInfo?.shop_address?.slice(0, 25)}
              </th>
            </tr>
            <tr>
              <th className="text-sm text-gray-800" colSpan={7}>
                {invoiceData?.merchantInfo?.contact_no}
              </th>
            </tr>
            <tr>
              <th className="text-xs text-gray-800" colSpan={7}>
                Invoice/Bill
              </th>
            </tr>
            <tr>
              <td
                colSpan={14}
                align="left"
                className="font-bold text-gray-800 text-xs pt-5"
              >
                Invoice No. : {invoiceData?._id?.slice(-5)}
              </td>
            </tr>
            <tr>
              <td
                colSpan={14}
                align="left"
                className="text-gray-800 font-bold text-xs"
              >
                Date : {formatDate(invoiceData?.deliveryAt)}
              </td>
            </tr>
            {/* <tr>
              <td
                colSpan={14}
                align="left"
                className="font-bold text-gray-800 text-xs"
              >
                Name : {invoiceData?.customerInfo?.customer_name}
              </td>
            </tr> */}

            {/* <tr>
              <td
                colSpan={9}
                align="left"
                className="text-gray-800 font-bold text-xs"
              >
                Contact : {invoiceData?.customerInfo?.contact_no}
              </td>
            </tr> */}
            {/* <tr>
              <td
                colSpan={5}
                align="left"
                className="font-bold text-gray-800 text-xs "
              >
                Address : {invoiceData?.customerInfo?.customer_address}
              </td>
              <td
                colSpan={4}
                align="right"
                className="text-gray-800 font-bold"
              ></td>
            </tr> */}
          </thead>
        </table>
        <table className="testClass w-[100%] max-w-[92%] text-center  mt-5">
          <tbody>
            <tr className="border-0 pb-2 mb-2">
              <td
                className="w-[10%] border-0 font-bold text-sm leading-10 "
                align="center"
              >
                sl
              </td>
              <td
                className="w-[90%]  border-0 font-bold text-sm leading-10  "
                colSpan={3}
              >
                Product Name
              </td>
              <td
                className="w-[10%]  border-0 font-bold text-sm  leading-10"
                colSpan={6}
              >
                Total
              </td>
            </tr>
            {invoiceData?.orderItems?.map((pItem, i) => (
              <tr className="border border-[#0000] " key={i}>
                <td
                  className="w-[10%] border-0  text-xs "
                  style={{ verticalAlign: 'top', textAlign: 'center' }}
                >
                  {i + 1}.
                </td>
                <td className="w-[80%] border-0 text-xs  px-2 pb-2" colSpan={3}>
                  <p className="text-left">
                    {pItem?.product_title_beng}
                    {/* {pItem?.sale_price} BDT * {''}
                    {pItem?.quantity} Qty */}
                  </p>
                  <p className="text-right">
                    <span>
                      {pItem?.sale_price} ৳ * {''}
                      {pItem?.quantity} Qty
                    </span>
                  </p>
                </td>
                <td
                  className="w-[10%] border-0 text-xs  align-right "
                  colSpan={6}
                >
                  {parseFloat(pItem?.sale_price * pItem?.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <td className="w-[90%] text-sm font-medium ml-2" align="left">
          In Words: {amountToText(invoiceData?.totalAmount)}.
        </td>
        <table className="testClass w-[100%] max-w-[92%] text-center  m-2 capitalize">
          <tbody>
            <tr>
              <td />
              <td className="w-[15%] text-sm font-medium text-left">
                Subtotal
              </td>
              <td className="w-[15%] text-sm font-medium text-right">
                {invoiceData?.subTotal} ৳
              </td>
            </tr>
            <tr>
              <td></td>

              <td className="w-[15%] text-sm font-medium text-left">
                Discount
              </td>
              <td className="w-[15%] text-sm font-medium text-right">
                {invoiceData?.less_amount} ৳
              </td>
            </tr>
            <tr>
              <td></td>

              <td className="w-[15%] text-sm font-medium text-left">
                Delivery Charge
              </td>
              <td className="w-[15%] text-sm font-medium text-right">
                {invoiceData?.less_amount} ৳
              </td>
            </tr>
            <tr>
              <td></td>

              <td className="w-[15%] text-sm font-medium text-left">%Vat</td>
              <td className="w-[15%] text-sm font-medium text-right">
                {invoiceData?.vatAmount} ৳
              </td>
            </tr>
            <tr className="">
              <td></td>

              <td className="w-[20%] text-sm font-medium text-left">Total</td>
              <td className="w-[20%] text-sm font-medium text-right">
                {invoiceData?.totalAmount} ৳
              </td>
            </tr>

            <tr>
              <td align="left" className="pt-20 font-bold text-sm" colSpan={1}>
                {/* Customer&apos; Signature{' '} */}
              </td>
              <td
                className="w-[30%] pt-20 font-bold text-sm"
                align="right"
                colSpan={2}
              >
                {/* Authorized Signature{' '} */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export const FunctionalComponentToPrint = React.forwardRef((props, ref) => {
  // eslint-disable-line max-len
  return <ThermalComponentToPrint ref={ref} text={props.text} />;
});

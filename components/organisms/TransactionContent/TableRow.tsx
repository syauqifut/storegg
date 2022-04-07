import Image from "next/image";
import cx from 'classnames';
import Link from "next/link";

interface TableRowProps {
    title: string,
    image: string,
    category: "Desktop" | "Mobile";
    amount: number,
    price: number,
    transactionstatus: "success" | "pending" | "failed",
}
export default function TableRow(props: TableRowProps) {
    const {title, image, category, amount, price, transactionstatus} = props;
    const className = cx({
        'float-start': true,
        'icon-status': true,
        'success': transactionstatus === 'success',
        'pending': transactionstatus === 'pending',
        'failed': transactionstatus === 'failed'
      });
  return (
    <tr className="align-middle">
        <th scope="row">
            <img
                className="float-start me-3 mb-lg-0 mb-3"
                src={`/img/${image}.png`}
                width="80"
                height="60"
                alt="game thumbnail"
            />
            <div className="game-title-header">
                <p className="game-title fw-medium text-start color-palette-1 m-0">
                    {title}
                </p>
                <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
            </div>
        </th>
        <td>
            <p className="fw-medium color-palette-1 m-0">{amount}</p>
        </td>
        <td>
            <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
        </td>
        <td>
            <div>
            <span className={className} />
            <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                {transactionstatus}
            </p>
            </div>
        </td>
        <td>
            <Link href="/member/transactions/detail" >
                <a
                className="btn btn-status rounded-pill text-sm"
                >
                Details
                </a>
            </Link>
        </td>
    </tr>
  )
}

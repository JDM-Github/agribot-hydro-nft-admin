import { toast } from "react-toastify";
import { CheckCircle, XCircle, Info } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
	toast(
		<div className="flex items-center gap-2">
			{type === "success" && <CheckCircle className="text-green-500" size={20} />}
			{type === "error" && <XCircle className="text-red-500" size={20} />}
			{type === "info" && <Info className="text-blue-400" size={20} />}
			<span>{message}</span>
		</div>,
		{
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			theme: "dark",
			style: {
				background: "linear-gradient(to right, #030613, #0E1927)",
				color: "#EDEDED",
				border: "1px solid #EDEDED22",
				borderLeft:
					type === "success"
						? "4px solid #4CAF50"
						: type === "error"
						? "4px solid #F44336"
						: "4px solid #2196F3",
				borderRadius: "8px",
				padding: "12px",
			},
		}
	);
};

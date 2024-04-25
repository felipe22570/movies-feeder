import { useState } from "react";
import { useToast } from "./ui/use-toast";

const CommentsSkeleton = () => {
	return (
		<div className="flex flex-col gap-y-7">
			<div className="flex gap-3">
				<div className="skeleton w-10 h-10 rounded-full"></div>

				<div className="flex flex-col gap-3 mt-3">
					<div className="skeleton w-32 h-3"></div>
					<div className="skeleton w-72 h-8"></div>
				</div>
			</div>
			<div className="flex gap-3">
				<div className="skeleton w-10 h-10 rounded-full"></div>

				<div className="flex flex-col gap-3 mt-3">
					<div className="skeleton w-32 h-3"></div>
					<div className="skeleton w-72 h-8"></div>
				</div>
			</div>
		</div>
	);
};

const Comments = () => {
	const [newComment, setNewComment] = useState("");
	const { toast } = useToast();

	const addComment = () => {
		setNewComment("");
		console.log("comment added", newComment);

		toast({
			title: "Success",
			description: "Comment added successfully!",
			color: "bg-green-500",
			className: "text-white bg-green-600",
			duration: 2500,
		});
	};

	return (
		<div className="flex flex-col gap-y-5">
			<h2 className="text-xl font-bold">Comments</h2>

			<div className="relative lg:w-[40%]">
				<textarea
					className="textarea textarea-bordered textarea-md w-full"
					placeholder="Insert a comment"
					value={newComment}
					onChange={(e) => setNewComment(e.target.value)}
				></textarea>
				<button className="btn btn-xs btn-primary absolute bottom-4 right-4" onClick={addComment}>
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
						<path fill="currentColor" d="M3 20v-6l8-2l-8-2V4l19 8z"></path>
					</svg>
				</button>
			</div>

			<CommentsSkeleton />
		</div>
	);
};

export default Comments;

import { posts } from '../../posts';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
	const { id } = params;
	const post = posts.find((post) => post._id === id);
	return NextResponse.json(post || {});
}

export async function DELETE(req, { params }) {
	const { id } = params;
	const postIndex = posts.findIndex((p) => p._id === id);

	posts.splice(postIndex, 1);
	return NextResponse.json({ id });
}

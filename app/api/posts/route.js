import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

import { posts } from '../posts';

export async function GET(req) {
	return NextResponse.json(posts);
}

export async function POST(req) {
	const post = await req.json();
	posts.push({
		...post,
		categories: post.categories.split(' '),
		_id: uuidv4(),
	});
	return NextResponse.json(post);
}

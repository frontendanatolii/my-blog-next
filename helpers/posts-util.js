import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);

  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const postSlug = fileName.replace(/\.md$/, '');

  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  }

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const posts = [];

  for (const postFile of postFiles) {
    const postData = getPostData(postFile);

    posts.push(postData);
  }

  const sortedPosts = posts.sort((postA, postB) => postA.date - postB.date);

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter(post => post.isFeatured);
}
import React from "react";
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import Link from 'next/link'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={ 404 }/>;
    }
    return (
        <Layout preview={ preview }>
            <Container>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
                    <Link href="/">
                        <a className="hover:underline">Blog</a>
                    </Link>
                    .
                </h2>
                { router.isFallback ? (
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
                        Loading…
                    </h1>
                ) : (
                    <>
                        <article className="mb-32">
                            <Head>
                                <title>
                                    { post.title } | Pcabreus.com
                                </title>
                            </Head>
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
                                { post.title }
                            </h1>
                            <div className="max-w-2xl mx-auto">
                                <div
                                    className="markdown"
                                    dangerouslySetInnerHTML={ { __html: post.content } }
                                />
                            </div>
                        </article>
                    </>
                ) }
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ]);

    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts([ 'slug' ])

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}
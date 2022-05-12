import React from 'react';
import PageTitle from '../shared/PageTitle/PageTitle';

const Blogs = () => {
    return (
        <section id='blogs' className=''>
            <PageTitle title={'Blogs'}></PageTitle>
            <div className='pt-36 pb-28 md:px-20'>
                <h3 className="leading-tight text-3xl font-bold text-dark-blue mb-5">  Blogs</h3>
                <div class="accordion font-medium  shadow-lg rounded-lg text-left" id="accordionExample">
                    <div class="accordion-item bg-white border border-gray-200 py-3">
                        <h2 class="accordion-header mb-0" id="headingOne">
                            <button class=" accordion-button  font-bold relative flex items-center w-full py-4 px-5 text-base text-black text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-target="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne">
                                <span className='text-pastel-green-dark'>Differences between  <b>JavaScript </b> and  <b>Node.js. </b></span>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne">
                            <div class="accordion-body py-4 px-5">
                                <b>JavaScript</b>JavaScript is an open-source, cross-platform, interpreted, lightweight scripting programming language which is used to develop dynamic and web applications. It is a programming language. It works in any browser that has a proper browser engine. It is mostly used on the client-side server.
                                <div className='py-1'></div>
                                On the other hand, <b>Node.js </b> is a cross-platform, open-source JavaScript runtime environment that allows JavaScript to be run on the server. It's a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use independently. It is mainly used on the server-side.

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-white border border-gray-200 py-3">
                        <h2 class="accordion-header mb-0" id="headingTwo">
                            <button class=" accordion-button   font-bold flex items-center w-full py-4 px-5 text-base text-black text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">
                                <span className='text-pastel-green-dark'>When should you use  <b>Node.js </b> and when should you use  <b>MongoDB </b>?</span>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse" aria-labelledby="headingTwo">
                            <div class="accordion-body py-4 px-5">
                                <b>Node.js </b>is mainly used for event-driven and non-blocking servers because of its single-threaded nature. It is used for traditional web sites and back-end API services even though initially it was designed with real-time, push-based architectures in mind.
                                <div className='py-1'></div>
                                <b>MongoDB</b>, a NoSQL Database is used when the data is document-centric and doesn't fit well into the schema of a relational database.  MongoDB makes it easy to store structured or unstructured data. It uses a JSON-like format to store documents.

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="headingThree">
                            <button class=" accordion-button  font-bold relative flex items-center w-full py-4 px-5 text-base text-black text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                aria-controls="collapseThree">
                                <span className='text-pastel-green-dark'> Differences between <b>SQL</b> and <b>NOSQL</b> databases.</span>
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse" aria-labelledby="headingThree">
                            <div class="accordion-body py-4 px-5">
                                <b>SQL</b>  databases are relational. They use structured query language and also have a predefined schema. SQL databases are vertically scalable and table-based. Finally, they are better for multi-row transactions.
                                <div className='py-1'></div>
                                On the other hand, <b>NOSQL</b>  databases are non-relational. They have dynamic schemas for unstructured data. NoSQL databases are horizontally scalable and they are document, key-value, graph, or wide-column stores. Finally, NoSQL databases are better for unstructured data like documents or JSON.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="headingThree">
                            <button class=" accordion-button  font-bold relative flex items-center w-full py-4 px-5 text-base text-black text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                aria-controls="collapseFour">
                                <span className='text-pastel-green-dark'>What is the purpose of <b>JWT</b> and how does it work?</span>
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse" aria-labelledby="headingFour">
                            <div class="accordion-body py-4 px-5">
                                <b>  JWT (JSON Web Token),</b> is an open standard used to share security information between two parties and they are a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                                <div className='py-1'></div>
                                JWTs is different from other web tokens as they contain a set of claims. Claims are used to transmit information between two parties. These claims depend on the use cases at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
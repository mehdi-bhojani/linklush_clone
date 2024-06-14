import React from "react";

function BlogPost() {
  return (
    <section
      className="pb-16 xs:pb-20 md:pb-[100px] lg:pb-[120px]  entry-animate data-[animate='true']:animate-fade-in-down"
      data-animate="true"
    >
      <div className="container">
        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 xs:gap-x-12 lg:gap-y-10 lg:gap-x-14">
            <p className="col-span-3 text-center">No posts found</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPost;

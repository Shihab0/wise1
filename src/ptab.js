import React from 'react';

const ptab = () => {
    return (
        <div className="App">
            <div class="wrapper">
                <input type="radio" name="slider" checked id="home" />
                <input type="radio" name="slider" id="blog" />
                <input type="radio" name="slider" id="code" />
                <input type="radio" name="slider" id="help" />
                <input type="radio" name="slider" id="about" />
                <nav>
                    <label for="home" class="home"><i class="fas fa-home"></i>Home</label>
                    <label for="blog" class="blog"><i class="fas fa-blog"></i>Blog</label>
                    <label for="code" class="code"><i class="fas fa-code"></i>Code</label>
                    <label for="help" class="help"><i class="far fa-envelope"></i>Help</label>
                    <label for="about" class="about"><i class="far fa-user"></i>About</label>
                    <div class="slider"></div>
                </nav>
                <section>
                    <div class="content content-1">
                        <div class="title">This is a Home content</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero aspernatur nobis provident dolores molestias quia quisquam laborum, inventore quis, distinctioa, fugit repudiandae delectus sunt ipsam! Odio illo at quia doloremque fugit iops, asperiores? Consectetur esse officia labore voluptatum blanditiis molestias dic voluptas est, minima unde sequi, praesentium dicta suscipit quisquam iure sed, nemo.</p>
                    </div>
                    <div class="content content-2">
                        <div class="title">This is a Blog content</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit amet. Possimus doloris nesciunt mollitia culpa sint itaque, vitae praesentium assumenda suscipit fugit doloremque adipisci doloribus, sequi facere itaque cumque accusamus, quam molestias sed provident quibusdam nam deleniti. Autem eaque aut impedit eo nobis quia, eos sequi tempore! Facere ex repellendus, laboriosam perferendise. Enim quis illo harum, exercitationem nam totam fugit omnis natus quam totam, repudiandae dolor laborum! Commodi?</p>
                    </div>
                    <div class="content content-3">
                        <div class="title">This is a Code content</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, debitis nesciunt! Consectetur officiis, libero nobis dolorem pariatur quisquam temporibus. Labore quaerat neque facere itaque laudantium odit veniam consectetur numquam delectus aspernatur, perferendis repellat illo sequi excepturi quos ipsam aliquid est consequuntur.</p>
                    </div>
                    <div class="content content-4">
                        <div class="title">This is a Help content</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim reprehenderit null itaq, odio repellat asperiores vel voluptatem magnam praesentium, eveniet iure ab facere officiis. Quod sequi vel, rem quam provident soluta nihil, eos. Illo oditu omnis cumque praesentium voluptate maxime voluptatibus facilis nulla ipsam quidem mollitia! Veniam, fuga, possimus. Commodi, fugiat aut ut quorioms stu necessitatibus, cumque laborum rem provident tenetur.</p>
                    </div>
                    <div class="content content-5">
                        <div class="title">This is a About content</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur officia sequi aliquam. Voluptatem distinctio nemo culpa veritatis nostrum fugit rem adipisci ea ipsam, non veniam ut aspernatur aperiam assumenda quis esse soluta vitae, placeat quasi. Iste dolorum asperiores hic impedit nesciunt atqu, officia magnam commodi iusto aliquid eaque, libero.</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ptab;
import React, { useEffect } from "react";
import "./css/style.css"; // Import global styles (assumed to be in src/style)
import "./css/main.css";
import {Helmet} from "react-helmet";

function NavComponent() {
  return (
    <nav className="nav">
      <div className="nav_bar">
        <h1 className="font-mc" id="go-home" style={{ position: "relative" }}>
          <img
            src="https://images-ext-1.discordapp.net/external/DSMRTuG5qctfc2L-JdzetkTPPqJanwe83v2QtasDQqc/https/i.imgur.com/pgWuALs.png?format=webp&quality=lossless&width=1600&height=384"
            alt="logo"
            width={240}
          />
        </h1>
        <div className="nav_bar_right">
          <a
            data-a-page-leave=""
            id="w-node-_6ea2b7a3-3060-a27e-d98f-d6da2a773f5d-2a773f58"
            href="mailto:support@navdyut.com"
            className="button is-nav w-inline-block"
          >
            <div className="text-style-cpt2">Contact Us</div>
          </a>
        </div>
      </div>
      <div data-lenis-prevent="" className="nav_menu">
        {/* Menu content (simplified for brevity; expand as needed) */}
        <div className="nav_menu_wrap">
          <div className="padding-global">
            <div className="padding-nav_menu">
              <div className="w-layout-grid container-grid">
                <div
                  id="w-node-_77685b17-3a16-22c0-bf2a-c1c50306f1a4-2a773f58"
                  className="nav_menu_links_wrap"
                >
                  <a
                    data-a-page-leave=""
                    href="/#home"
                    aria-current="page"
                    className="nav_menu_link w-inline-block w--current"
                  >
                    <div className="nav_menu_link_icon w-embed">
                      <svg width="100%" fill="none" viewBox="0 0 33 33">
                        <path
                          stroke="url(#a)"
                          strokeOpacity=".2"
                          d="M0 .702h22v22H0z"
                          transform="scale(1.00739 .99256) rotate(45 8.125 20.335)"
                        />
                        <defs>
                          <linearGradient
                            id="a"
                            x1="11.5"
                            x2="11.5"
                            y1="0"
                            y2="23"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7D89C5" />
                            <stop offset="1" stopColor="#5E7EAB" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h2 className="font-bc">Home</h2>
                  </a>
                  <a
                    data-a-page-leave=""
                    href="/#our-current-projects"
                    aria-current="page"
                    className="nav_menu_link w-inline-block w--current"
                  >
                    <div className="nav_menu_link_icon w-embed">
                      <svg width="100%" fill="none" viewBox="0 0 33 33">
                        <path
                          stroke="url(#a)"
                          strokeOpacity=".2"
                          d="M0 .702h22v22H0z"
                          transform="scale(1.00739 .99256) rotate(45 8.125 20.335)"
                        />
                        <defs>
                          <linearGradient
                            id="a"
                            x1="11.5"
                            x2="11.5"
                            y1="0"
                            y2="23"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7D89C5" />
                            <stop offset="1" stopColor="#5E7EAB" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h2 className="font-bc">Our Current Projects</h2>
                  </a>
                  <a
                    data-a-page-leave=""
                    href="/#mission"
                    aria-current="page"
                    className="nav_menu_link w-inline-block w--current"
                  >
                    <div className="nav_menu_link_icon w-embed">
                      <svg width="100%" fill="none" viewBox="0 0 33 33">
                        <path
                          stroke="url(#a)"
                          strokeOpacity=".2"
                          d="M0 .702h22v22H0z"
                          transform="scale(1.00739 .99256) rotate(45 8.125 20.335)"
                        />
                        <defs>
                          <linearGradient
                            id="a"
                            x1="11.5"
                            x2="11.5"
                            y1="0"
                            y2="23"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#7D89C5" />
                            <stop offset="1" stopColor="#5E7EAB" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h2 className="font-bc">Mission</h2>
                  </a>
                </div>
                <div
                  id="w-node-a546481e-2b91-e119-2eab-d74c3a72d838-2a773f58"
                  className="w-layout-grid nav_menu_locations_wrap"
                >
                  <div className="contact-form_locations_item">
                    <div className="background-color-blur"></div>
                    <div className="position-relative">
                      <div>Delhi</div>
                      <div className="m-bottom m-xs"></div>
                      <a
                        href="mailto:support@navdyut.com"
                        className="footer_link w-inline-block"
                      >
                        <div className="text-style-cpt1">
                          Tolstoy Marg
                          <br />
                        </div>
                        <div className="m-bottom m-xxs"></div>
                        <div className="footer_link_arrow_svg w-embed">
                          <svg
                            width="100%"
                            viewBox="0 0 9 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              d="M0 4.05127H7.5M7.5 4.05127L4 1.05127L3 2.05127M7.5 4.05127L4 7.05127L3 6.05127"
                              stroke="currentColor"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Add Mumbai and London locations similarly */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function AsideLinesComponent() {
  return (
    <aside className="wrapper-lines">
      <div className="wrapper-lines_embed w-embed">
        <svg width="100%" height="100%">
          <line
            className="wrapper-line-1"
            strokeWidth="1"
            stroke="currentColor"
            x1="0%"
            x2="0%"
            y1="0%"
            y2="100%"
          />
          <line
            className="wrapper-line-2"
            strokeWidth="1"
            stroke="currentColor"
            x1="50%"
            x2="50%"
            y1="0%"
            y2="100%"
          />
          <line
            className="wrapper-line-3"
            strokeWidth="1"
            stroke="currentColor"
            x1="100%"
            x2="100%"
            y1="0%"
            y2="100%"
          />
        </svg>
      </div>
    </aside>
  );
}

function HomeCubeCanvasComponent() {
  return (
    <div className="home_cube_camvas_wrap">
      <div
        data-a-fade-delay="0.5"
        data-a-fade=""
        className="home_cube_canvas w-embed"
      >
        <canvas className="webgl-home-cube"></canvas>
      </div>
    </div>
  );
}

function HomeHeroComponent() {
  return (
    <section className="section-home-hero">
      <div className="padding-section_home-hero">
        <div className="w-layout-grid container-grid">
          <div
            id="w-node-_3be8433f-84d2-fd06-973c-dc590b381107-b4e49df4"
            className="home_hero_content_1"
          >
            <h1 data-a-title-delay="0.1" data-a-title="">
              Navdyut A.I and Tech Research Labs
            </h1>
            <div className="m-bottom m-s"></div>
            <div className="home_hero_content_1_text">
              <p data-a-text-delay="0.25" data-a-text="">
                We’re Navdyut AI and Tech Research Labs, and we’re all about
                chasing a big dream: Artificial General Intelligence (AGI)—AI
                that can think and learn just like us humans
              </p>
            </div>
            <div className="m-bottom m-s"></div>
            <a
              data-a-fade-delay="0.45"
              data-a-page-leave=""
              data-a-fade=""
              id="w-node-_2c3917f9-5351-c56f-fc28-4853cfaf7c36-b4e49df4"
              href="https://chat.navdyut.com"
              className="button w-inline-block"
            >
              <div className="text-style-cpt2">Chat with our Axom A.I</div>
            </a>
          </div>
          {/* Add other hero content divs similarly */}
        </div>
      </div>
    </section>
  );
}

function HomePieceComponent() {
  return (
    <section className="section-home-piece">
      <div className="section-home-piece_lines-svg w-embed">
        <svg width="100%" height="100%">
          <line
            strokeWidth="1"
            stroke="currentColor"
            x1="0%"
            x2="100%"
            y1="0%"
            y2="0%"
          />
          <line
            strokeWidth="1"
            stroke="currentColor"
            x1="0%"
            x2="100%"
            y1="100%"
            y2="100%"
          />
        </svg>
      </div>
      <div className="padding-global" id="#our-current-projects">
        <div className="padding-section_home_piece">
          <div className="w-layout-grid container-grid">
            <div
              id="w-node-_7e48bd7d-ac51-6917-fe8f-92bc493e5134-b4e49df4"
              className="home_piece"
            >
              <div data-a-svg="draw" className="home_piece_svg w-embed">
                <svg fill="none" viewBox="0 0 41 40">
                  {/* SVG paths */}
                </svg>
              </div>
              <div className="m-bottom m-m"></div>
              <h1 data-a-title="">Our Current Projects.</h1>
              {/* <p>Here’s a peek into the fields we’re passionate about and where we’re making waves:</p> */}
              <div className="m-bottom m-s"></div>
              <p data-a-text="" className="text-color-grey">
                Here’s a peek into the fields we’re passionate about and where
                we’re making waves:
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeApproachComponent() {
  return (
    <section className="section-home-approach">
      <div className="padding-section_home-features">
        <div className="w-layout-grid container-grid">
          <div
            id="w-node-_8d736240-cfaa-1461-dcc4-937930e0589e-b4e49df4"
            className="home_features_content_1"
          >
            <h2 data-a-title="">AI That Speaks Your Language</h2>
            <div className="m-bottom m-xs"></div>
            <div className="home_features_content_1_text">
              <p
                data-a-text-delay="0.1"
                data-a-text=""
                className="text-color-grey"
              >
                Imagine chatting with an AI that gets you—really gets you—in
                your own language. That’s what we’re doing with projects like
                our Assamese chatbot. We’re crafting localized LLMs to connect
                with people in their native tongues, because AI shouldn’t feel
                foreign—it should feel like home.
              </p>
            </div>
          </div>
          <div
            id="w-node-bb029c8b-679d-6cac-0495-3fba54b6b48e-b4e49df4"
            class="home_approach_space_1"
          ></div>
          <div
            data-a-cards=".home_features_grid_item"
            id="w-node-_4b9b8430-a509-8d13-79f4-879c2be6eadc-b4e49df4"
            class="w-layout-grid home_features_grid"
          >
            <div
              id="w-node-d685e3bc-de0a-5ca0-4725-4549abf511e5-b4e49df4"
              class="home_features_grid_item"
            >
              <div class="background-color-blur"></div>
              <div class="home_features_grid_item-inner-smart-edu">
                <h3>Smarter Education</h3>
                <div class="m-bottom m-s"></div>
                <div class="home_features_grid_item-text">
                  <p class="text-color-grey">
                    Learning isn’t one-size-fits-all, and we think AI can change
                    that. We team up with schools, tap into their unique data,
                    and build tools that adapt to each student’s needs. It’s
                    about making education personal, engaging, and way more
                    effective.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="w-node-_2f71c912-5fee-be72-8de4-42f41d38bb9f-b4e49df4"
              class="home_features_grid_item is-2"
            >
              <div class="background-color-blur"></div>
              <div class="home_features_grid_item-inner">
                <h3>Boosting Sales with AI</h3>
                <div class="m-bottom m-s"></div>
                <div class="home_features_grid_item-text">
                  <p class="text-color-grey">
                    Businesses move fast, and customers expect answers faster.
                    Our voice assistants and chatbots step in to help—answering
                    questions, guiding people through decisions, and making the
                    whole sales process smoother. It’s like having a tireless
                    teammate who’s always ready to pitch in
                  </p>
                </div>
              </div>
            </div>
            <div
              id="w-node-_8f3464ad-05e8-d4ae-6fab-13caeaf998f9-b4e49df4"
              class="home_features_grid_item is-3"
            >
              <div class="background-color-blur"></div>
              <div class="home_features_grid_item-inner">
                <h3>Next-Level Cybersecurity</h3>
                <div class="m-bottom m-s"></div>
                <div class="home_features_grid_item-text">
                  <p class="text-color-grey">
                    Cyber threats are tricky, but we’re trickier. Our AI tools
                    spot attacks as they happen, dig through data to find weak
                    spots, and figure out how to keep them locked down. We’re
                    here to help businesses and people stay safe in a wild
                    digital world.
                  </p>
                </div>
              </div>
            </div>
            <div
              id="w-node-d685e3bc-de0a-5ca0-4725-4549abf511e5-b4e49df4"
              class="home_features_grid_item"
            >
              <div class="background-color-blur"></div>
              <div class="home_features_grid_item-inner">
                <h3>Pushing the AI Frontier</h3>
                <div class="m-bottom m-s"></div>
                <div class="home_features_grid_item-text">
                  <p class="text-color-grey">
                    We’re explorers at heart. Whether it’s healthcare, finance,
                    or something totally unexpected, we’re always tinkering with
                    new ways to use AI. If it’s tied to AGI and solves a real
                    problem, we’re game to give it a shot.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="w-node-_8b64d5b7-877c-9e53-3540-9ad0c1141e24-b4e49df4"
        class="home_approach_space_1"
      ></div>
      <div
        id="w-node-_466c5989-0a9b-d3e5-0510-59d120767f50-b4e49df"
        class="home_features_cta_content custom-width-for-title"
      >
        <h2 data-a-title="" id="#mission">Let’s Build the Future Together</h2>
        <div class="m-bottom m-s"></div>
        <div
          class="home_features_cta_content_text"
          style={{ textAlign: "center" }}
        >
          <p
            data-a-text=""
            // class="text-color-grey"
            // style="text-align: left;"
          >
            We’re not just dreaming about AGI—we’re working toward it, one
            project at a time. Want to see what we’re up to or join the ride?
            Dive into our work in language, education, sales, cybersecurity, and
            beyond.
            <br />
            We’d love to team up with folks who share our excitement for what AI
            can do. Let’s make something amazing happen—together.
          </p>
        </div>
        <div class="m-bottom m-s"></div>
        <a
          data-a-page-leave=""
          data-a-fade=""
          id="w-node-cdbc9a5b-b68a-7953-0c73-dd2abc43faf6-b4e49df4"
          href="mailto:support@navdyut.com"
          class="button w-inline-block"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div class="text-style-cpt2">Contact us</div>
        </a>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
}

function FooterComponent() {
  return (
    <footer class="footer">
      <div class="padding-global">
        <div class="padding-footer">
          <div class="w-layout-grid container-grid is-footer">
            <div
              id="w-node-e9c8a64a-5f36-a7aa-6339-eb523332320b-33323207"
              class="footer_head"
            >
              <a
                data-a-page-leave=""
                href="/old-home"
                class="footer_logo w-inline-block"
              >
                <div class="footer_logo_icon w-embed">
                  <svg width="100%" viewBox="0 0 188 27">
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M134.041 15.497c0 4.274-2.893 5.921-6.031 5.921-3.415 0-5.89-2.067-5.89-5.5V2.185h-5.926v13.593c0 7.392 4.985 10.615 11.887 10.615 6.517 0 11.885-2.733 11.885-10.65V2.185h-5.925v13.312ZM110.451 2.08l-.18.001c-4.645 0-8.266 1.545-10.702 3.894l4.171 3.804c1.476-1.667 3.839-2.699 6.71-2.753h4.555V2.05h-4.555v.031Zm45.444 10.86c1.989-.98 3.243-2.767 3.243-4.764 0-2.663-2.266-5.991-7.878-5.991h-10.283v23.892h5.935l-.01-19.513h3.104c2.16 0 3.031 1.296 3.031 2.523 0 1.26-.871 2.591-3.031 2.591h-2.192v4.38h3.236c2.093 0 3.627.947 3.627 2.697 0 2.068-1.151 2.944-4.428 2.944h-2.435v4.378h4.736c6.937 0 8.4-4.274 8.4-7.006 0-2.802-1.673-5.255-5.055-6.13Zm-52.475 5.377-3.942 4.369c2.276 2.208 5.66 3.679 10.163 3.718v.016h5.313v-4.978h-5.272c-2.726-.202-4.939-1.358-6.262-3.125Zm63.77 3.382v-5.746h10.84v-4.379h-10.84v-5.01h11.363v-4.38h-17.289v23.893h17.532V21.7h-11.607Zm-84.68-7.587L93.53 2.08l-6.213-.084L76.296 14.03l6.213.083ZM15.794 12.94c1.987-.98 3.242-2.767 3.242-4.764 0-2.663-2.266-5.991-7.878-5.991H.876v23.892H6.8V6.564h3.102c2.162 0 3.033 1.296 3.033 2.523 0 1.26-.871 2.591-3.033 2.591H7.7v4.38h3.248c2.091 0 3.625.947 3.625 2.697 0 2.068-1.15 2.944-4.426 2.944H7.701v4.378h4.746c6.937 0 8.4-4.274 8.4-7.006 0-2.802-1.672-5.255-5.053-6.13Zm27.78-10.755-7.83 19.514h-8.273V2.185h-5.925v23.892h18.716l6.833-18.182 3.833 9.285h-6.356l-1.552 4.168h9.65l1.953 4.73h6.379L50.442 2.184h-6.868ZM64.09 14.212c0-4.139 3.447-7.094 8.372-7.186h4.554V2.05h-4.554v.031l-.181.001c-9.097 0-14.29 5.909-14.29 12.235 0 6.077 4.545 12.01 13.661 12.088v.016h5.314v-4.978h-5.273c-4.488-.332-7.603-3.243-7.603-7.23Zm18.364.818 11.92 11.029-6.07-.083-11.92-11.028 6.07.082ZM184.7 1.9h.484c.292 0 .495.032.611.098.117.066.175.187.175.364 0 .182-.063.308-.19.38-.127.073-.343.109-.645.109h-.435v-.952Zm-.318 2.371h.318V3.113h.154c.3 0 .518.064.653.193.135.13.319.451.551.965h.396c-.189-.452-.326-.738-.41-.856a1.35 1.35 0 0 0-.407-.348c.478-.083.716-.327.716-.731 0-.22-.08-.39-.237-.514-.157-.123-.374-.185-.651-.185h-1.083V4.27Zm2.54.202c-.428.43-.94.645-1.539.645a2.088 2.088 0 0 1-1.537-.645 2.116 2.116 0 0 1-.64-1.547c0-.601.213-1.117.64-1.547.426-.43.94-.644 1.537-.644.598 0 1.111.215 1.54.644.427.43.641.946.641 1.547 0 .602-.214 1.117-.641 1.547Zm-3.3.223c.49.49 1.075.737 1.761.737a2.4 2.4 0 0 0 1.762-.737c.487-.49.732-1.081.732-1.77 0-.689-.245-1.279-.732-1.77a2.397 2.397 0 0 0-1.762-.736c-.686 0-1.272.245-1.761.736a2.42 2.42 0 0 0-.733 1.77c0 .689.245 1.28.733 1.77Z"
                    />
                  </svg>
                </div>
              </a>
              <div
                id="w-node-e9c8a64a-5f36-a7aa-6339-eb523332320e-33323207"
                class="footer_shape w-embed"
              >
                <svg
                  width="100%"
                  viewBox="0 0 39 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5 43.5072L18.5882 44.0298L18.1349 43.7698L19.5 42.9871L20.8677 43.7698L20.413 44.0298L19.5 43.5072ZM15.8453 42.4607L19.5407 40.345L23.1573 42.4595L22.7039 42.7195L19.5407 40.9093L16.2973 42.7195L15.8453 42.4607ZM13.5556 41.1504L19.5407 37.7244L25.4456 41.1504L24.9936 41.4092L19.5407 38.2886L14.0064 41.4092L13.5556 41.1504ZM19.5 35.6452L11.7181 40.0989L11.2647 39.8388L19.5 35.1252L27.7365 39.8388L27.2832 40.0989L19.5 35.6452ZM19.5407 33.0473L9.42719 38.7885L8.97385 38.5285L19.5395 32.4805L30.0262 38.5285L29.5715 38.7885L19.5395 33.0473H19.5407ZM19.5 30.4027L7.13884 37.4782L6.6855 37.2181L19.5 29.8826L32.3171 37.2181L31.8624 37.4782L19.5 30.4027ZM4.39587 35.9078L19.542 27.2392L34.6079 35.9078L34.1533 36.1679L19.542 27.806L4.84921 36.1679L4.39715 35.9078H4.39587ZM19.5 25.1614L2.55832 34.855L2.10498 34.595L19.5407 24.6148L36.8963 34.595L36.4417 34.855L19.4987 25.1588L19.5 25.1614ZM19.5 22.5407L0.268693 33.5447L0 33.3919L0.0343826 33.1597L19.2721 22.1494V0.0883652L19.4924 0L19.7292 0.135072V22.1014L39 33.1786L38.9592 33.4626L38.7389 33.5497L19.4987 22.5382L19.5 22.5407ZM21.5617 21.0991V1.18409L22.0188 1.4454V20.7911L39 30.5579L38.9682 31.0591L21.5617 21.0978V21.0991ZM0.0407497 30.534L16.9824 20.8378V1.39869L17.4383 1.17526V21.0966L0.0407497 31.0528V30.534ZM23.8513 19.7862V2.49442L24.3085 2.75573V19.5274L38.9592 27.912V28.4321L23.8513 19.7862ZM0.0407497 27.9133L14.6915 19.5287V2.70902L15.1474 2.48559V19.7862L0.0407497 28.4321V27.912V27.9133ZM0.0407497 25.2926L12.4019 18.2184V4.06606L12.8591 3.80475V18.4746L0.0407497 25.8115V25.2926ZM26.1002 18.4532L26.1409 3.80601L26.6388 4.09131L26.5981 18.2184L38.9592 25.2926V25.8115L26.1014 18.4519L26.1002 18.4532ZM28.3898 17.1428L28.4305 5.11761L28.9285 5.4029L28.8877 16.8613L39 22.696L38.9682 23.1971L28.3911 17.1428H28.3898ZM0.0407497 22.624L10.0703 16.9308L10.111 5.37765L10.5682 5.11634V17.1656L0.0407497 23.1895V22.6227V22.624ZM0.0407497 20.0501L7.82267 15.5965V6.68798L8.27983 6.42667V15.854L0.0407497 20.5689V20.0488V20.0501ZM30.6794 15.8313L30.7202 6.42667L31.1773 6.68798V15.5965L38.958 20.0501V20.5702L30.6794 15.8325V15.8313ZM33.0098 14.5436V7.737L33.467 7.99831V14.2394L38.9987 17.4534L38.9669 17.952L33.0098 14.5436ZM0.0407497 17.4294L5.53177 14.2861V7.9516L5.98766 7.72817V14.5436L0.0407497 17.947V17.4307V17.4294ZM35.3007 13.2321V9.04733L35.7579 9.30864V12.9291L39 14.8327L38.9682 15.3314L35.3007 13.2333V13.2321ZM0.0407497 14.762L3.2014 12.9998L3.24215 9.3099L3.69931 9.04859V13.2333L0.0407497 15.325V14.762ZM0.0407497 12.1868L0.952524 11.6655V10.6202L1.40968 10.3589V11.923L0.0407497 12.7056V12.1856V12.1868ZM37.5916 11.9242V10.3602L38.0895 10.6442L38.0487 11.6655L38.9605 12.1868V12.7056L37.5929 11.923L37.5916 11.9242Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div
              id="w-node-e9c8a64a-5f36-a7aa-6339-eb523332320f-33323207"
              class="footer_col"
            >
              {/* <p>Bharatvarsh</p> */}
              <div class="m-bottom m-xs"></div>
              <a
                href="mailto:contact@navdyut.com"
                class="footer_link w-inline-block"
              >
                <div class="text-style-cpt1">
                  Bharatvarsh
                  <br />
                </div>
                <div class="m-bottom m-xxs"></div>
                <div class="text-style-cpt1">
                  contact@navdyut.com
                  <br />
                </div>
              </a>
            </div>

            <div
              id="w-node-e9c8a64a-5f36-a7aa-6339-eb5233323236-33323207"
              class="m-bottom m-m"
            ></div>
            <div
              id="w-node-ef619313-077e-1d1a-c002-969d58a933ab-33323207"
              class="footer_divider is-last till-mobile-landscape"
            ></div>
            <div
              id="w-node-e9c8a64a-5f36-a7aa-6339-eb5233323237-33323207"
              class="footer_col is-footer-bottom"
            >
              <a
                href="mailto:contact@navdyut.com"
                class="footer_link w-inline-block"
              >
                <div class="text-style-cpt1">
                  contact@navdyut.com
                  <br />
                </div>
              </a>
            </div>
            <div
              id="w-node-e9c8a64a-5f36-a7aa-6339-eb523332323c-33323207"
              class="footer_col is-footer-bottom"
            >
              <a
                href="mailto:support@navdyut.com"
                class="footer_link w-inline-block"
              >
                <div class="text-style-cpt1">
                  Copyright © <span class="copy-year">2025</span> Navdyut AI
                  Research Labs.
                  <br />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MainComponent() {
  return (
    <main className="main-wrapper">
      <HomeHeroComponent />
      <HomePieceComponent />
      <HomeApproachComponent />
      <FooterComponent />
    </main>
  );
}

function HomePage() {
  useEffect(() => {
    // Load jQuery first
    const jQueryScript = document.createElement("script");
    jQueryScript.src =
      "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js";
    jQueryScript.integrity =
      "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=";
    jQueryScript.crossOrigin = "anonymous";
    jQueryScript.type = "text/javascript";
    document.body.appendChild(jQueryScript);

    // Load lib.js after jQuery
    const libScript = document.createElement("script");
    libScript.src = "./js/lib.js";
    libScript.type = "text/javascript";
    document.body.appendChild(libScript);

    // Load main.js as a module after lib.js
    const mainScript = document.createElement("script");
    mainScript.src = "./js/main.js";
    mainScript.type = "module";
    mainScript.async = true;
    document.body.appendChild(mainScript);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      document.body.removeChild(jQueryScript);
      document.body.removeChild(libScript);
      document.body.removeChild(mainScript);
    };
  }, []); // Run once when the component mounts

  return (
    <>
      <div className="preload" id="#home">
        <p data-a-text="" className="text-color-pure-black"></p>
      </div>
      <Helmet>
        <title>Navdyut AI Research Labs</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Navdyut AI Research Labs is all about chasing a big dream: Artificial General Intelligence (AGI)—AI that can think and learn just like us humans."
        />
        <meta
          name="keywords"
          content="Navdyut, AI, Research, Labs, Artificial General Intelligence, AGI, AI Research Labs, AI Research, AI Labs"
        />
      </Helmet>
      <div data-a-cursor="" className="cursor hide"></div>
      <div className="page-wrapper">
        <NavComponent />
        <AsideLinesComponent />
        <HomeCubeCanvasComponent />
        <MainComponent />
      </div>
    </>
  );
}

export default HomePage;

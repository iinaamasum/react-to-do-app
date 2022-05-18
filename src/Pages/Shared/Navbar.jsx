import React from 'react';
import { RiMenuFoldFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 1, name: 'My Task', path: '/myTask' },
    { id: 1, name: 'Add Task', path: '/addTask' },
  ];
  return (
    <section
      style={{ maxWidth: '1200px' }}
      className="mx-auto container px-4 md:px-10 pt-1"
    >
      <div class="drawer drawer-end">
        <input id="menu" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full navbar bg-primary rounded-full shadow">
            <div class="flex-1 px-2 mx-2 text-accent text-3xl font-bold tracking-wide">
              <Link to="/">Task Calc.</Link>
            </div>
            <div class="flex-none lg:hidden">
              <label for="menu" class="btn btn-square btn-ghost">
                <RiMenuFoldFill size={35} />
              </label>
            </div>

            <div class="flex-none hidden lg:block">
              <ul class="menu-horizontal mr-6">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      className="mr-4 text-accent font-semibold uppercase"
                      to={link.path}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div class="drawer-side">
          <label for="menu" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-primary">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

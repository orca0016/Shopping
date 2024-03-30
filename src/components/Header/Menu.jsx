export function Menu() {
  return (
    <nav className="menus ">
      <ul className="flex flex-col gap-3 list-drawer">
        <li>
          <div>Homeme </div>
          <ul className="mr-4">
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
            <li>test4</li>
          </ul>
        </li>
        <li>
          <div>Pages</div>
          <ul className="mr-4">
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
            <li>test4</li>
          </ul>
        </li>
        <li>
          <div>Blogs</div>
          <ul className="mr-4">
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
            <li>test4</li>
          </ul>
        </li>
        <li>
          <div>Shop</div>
          <ul className="mr-4">
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
            <li>test4</li>
          </ul>
        </li>
        <li>Contacts</li>
      </ul>
    </nav>
  );
}

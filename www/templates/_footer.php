<footer class="footer-wrap" role="contentinfo">
  <div class="container">

    <!-- Navigation footer links -->
    <?php if ($menus->footer): ?>
        <ul class="list-inline">
        <?php $i = 0; foreach ($menus->footer->item as $m): ?>
          <li class="list-inline-item">
            <a class="menu-item" href="<?= $m->url != '' ? $m->url : 'javascript:void(0)' ?>" role="menuitem"><?=$m->label?></a>
          </li>
        <?php ++$i; endforeach; ?>
        </ul>
      </nav>
    <?php endif; ?>

    <a id="back-to-top" href="#"><span class="sr-only">Retour en haut </span></a>
  </div>
</footer>

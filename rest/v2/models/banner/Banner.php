<?php

class Banner
{
  public $banner_aid;
  public $banner_is_active;
  public $banner_image;
  public $banner_title;
  public $banner_price;
  public $banner_category_id;
  public $banner_datetime;
  public $banner_created;

  public $category_aid;
  public $category_is_active;
  public $category_image;
  public $category_title;
  public $category_datetime;
  public $category_created;


  public $connection;
  public $lastInsertedId;
  public $banner_start;
  public $banner_total;
  public $banner_search;
  public $category_start;
  public $category_total;


  public $tblCategory;
  public $tblBanner;


  public function __construct($db)
  {
    $this->connection = $db;
    $this->tblCategory = "jollibee_category";
    $this->tblBanner = "jollibee_banner";
  }


  public function readAll()
  {
    try {
      $sql = "select * ";
      $sql .= "from ";
      $sql .= "{$this->tblCategory} as readCategory, ";
      $sql .= "{$this->tblBanner} as readBanner ";
      $sql .= "where readCategory.category_aid = readBanner.banner_category_id ";
      $sql .= "order by readBanner.banner_is_active desc, ";
      $sql .= "readBanner.banner_aid asc ";
      $query = $this->connection->query($sql);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function ReadAllByCategoryId()
  {
    try {
      $sql = "select * ";
      $sql .= "from ";
      $sql .= "{$this->tblCategory} as readCategory, ";
      $sql .= "{$this->tblBanner} as readBanner ";
      $sql .= "where readCategory.category_aid = readBanner.banner_category_id ";
      $sql .= "and readCategory.category_aid = :banner_category_id ";
      $sql .= "order by readBanner.banner_is_active desc, ";
      $sql .= "readBanner.banner_aid asc ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_category_id" => $this->banner_category_id,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function readLimit()
  {
    try {
      $sql = "select * ";
      $sql .= "from ";
      $sql .= "{$this->tblCategory} as readCategory, ";
      $sql .= "{$this->tblBanner} as readBanner ";
      $sql .= "where readCategory.category_aid = readBanner.banner_category_id ";
      $sql .= "order by readBanner.banner_is_active desc, ";
      $sql .= "readBanner.banner_aid asc ";
      $sql .= "limit :start, ";
      $sql .= ":total ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "start" => $this->banner_start - 1,
        "total" => $this->banner_total,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function readById()
  {
    try {
      $sql = "select * from {$this->tblBanner} ";
      $sql .= "where banner_aid = :banner_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_aid" => $this->banner_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function create()
  {
    try {
      $sql = "insert into {$this->tblBanner} ";
      $sql .= "(banner_is_active, ";
      $sql .= "banner_image, ";
      $sql .= "banner_title, ";
      $sql .= "banner_price, ";
      $sql .= "banner_category_id, ";
      $sql .= "banner_created, ";
      $sql .= "banner_datetime ) values ( ";
      $sql .= ":banner_is_active, ";
      $sql .= ":banner_image, ";
      $sql .= ":banner_title, ";
      $sql .= ":banner_price, ";
      $sql .= ":banner_category_id, ";
      $sql .= ":banner_created, ";
      $sql .= ":banner_datetime ) ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_is_active" => $this->banner_is_active,
        "banner_image" => $this->banner_image,
        "banner_title" => $this->banner_title,
        "banner_price" => $this->banner_price,
        "banner_category_id" => $this->banner_category_id,
        "banner_datetime" => $this->banner_datetime,
        "banner_created" => $this->banner_created,


      ]);
      $this->lastInsertedId = $this->connection->lastInsertId();
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  // public function checkName()
  // {
  //   try {
  //     $sql = "select banner_title from {$this->tblBanner} ";
  //     $sql .= "where banner_title = :banner_title ";
  //     $query = $this->connection->prepare($sql);
  //     $query->execute([
  //       "banner_title" => "{$this->banner_title}",
  //     ]);
  //   } catch (PDOException $ex) {
  //     $query = false;
  //   }
  //   return $query;
  // }


  public function update()
  {
    try {
      $sql = "update {$this->tblBanner} set ";
      $sql .= "banner_image = :banner_image, ";
      $sql .= "banner_title = :banner_title, ";
      $sql .= "banner_price = :banner_price, ";
      $sql .= "banner_category_id = :banner_category_id, ";
      $sql .= "banner_datetime = :banner_datetime ";
      $sql .= "where banner_aid  = :banner_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_image" => $this->banner_image,
        "banner_title" => $this->banner_title,
        "banner_price" => $this->banner_price,
        "banner_category_id" => $this->banner_category_id,
        "banner_datetime" => $this->banner_datetime,
        "banner_aid" => $this->banner_aid
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function delete()
  {
    try {
      $sql = "delete from {$this->tblBanner} ";
      $sql .= "where banner_aid = :banner_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_aid" => $this->banner_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }


  public function active()
  {
    try {
      $sql = "update {$this->tblBanner} set ";
      $sql .= "banner_is_active = :banner_is_active, ";
      $sql .= "banner_datetime = :banner_datetime ";
      $sql .= "where banner_aid  = :banner_aid ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_is_active" => $this->banner_is_active,
        "banner_datetime" => $this->banner_datetime,
        "banner_aid" => $this->banner_aid,
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  //   $sql = "select * ";
  // $sql .= "from ";
  // $sql .= "{$this->tblCategory} as readCategory, ";
  // $sql .= "{$this->tblBanner} as readBanner ";
  // $sql .= "where readCategory.category_aid = readBanner.banner_category_id ";
  // $sql .= "order by readBanner.banner_is_active desc, ";
  // $sql .= "readBanner.banner_aid asc ";

  //       $sql = "select * ";
  // $sql .= "from ";
  // $sql .= "{$this->tblCategory} as readCategory, ";
  // $sql .= "{$this->tblBanner} as readBanner ";
  // $sql .= "where readCategory.category_aid = readBanner.banner_category_id ";
  // $sql .= "and readCategory.category_aid = :banner_category_id ";
  // $sql .= "order by readBanner.banner_is_active desc, ";
  // $sql .= "readBanner.banner_aid asc ";


  public function search()
  {
    try {
      $sql = "select * ";
      $sql .= "from ";
      $sql .= "{$this->tblCategory} as searchCategory, ";
      $sql .= "{$this->tblBanner} as searchBanner ";
      $sql .= "where searchBanner.banner_title like :banner_title ";
      $sql .= "and searchCategory.category_aid = searchBanner.banner_category_id ";
      $sql .= "order by banner_is_active desc, ";
      $sql .= "banner_title ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_title" => "%{$this->banner_search}%",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }

  public function filterActive()
  {
    try {
      $sql = "select * from {$this->tblBanner} ";
      $sql .= "where banner_is_active like :banner_is_active ";
      $sql .= "order by banner_is_active desc, ";
      $sql .= "banner_title ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_is_active" => "%{$this->banner_is_active}%",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }



  public function filterActiveSearch()
  {
    try {
      $sql = "select * from {$this->tblBanner} ";
      $sql .= "where banner_is_active like :banner_is_active ";
      $sql .= "and banner_title like :banner_title ";
      $sql .= "order by banner_is_active desc, ";
      $sql .= "banner_title ";
      $query = $this->connection->prepare($sql);
      $query->execute([
        "banner_is_active" => "$this->banner_is_active",
        "banner_title" => "%{$this->banner_search}%",
      ]);
    } catch (PDOException $ex) {
      $query = false;
    }
    return $query;
  }
}